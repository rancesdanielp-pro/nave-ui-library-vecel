'use client';

import * as React from 'react';
import { cn } from '../../../../utils/cn';
import { Button } from '../../buttons';

export type FileUploadState = 'default' | 'drag' | 'error' | 'disabled';

export type FileUploadProps = {
  /** Tipos permitidos (ej: ['application/pdf','image/jpeg','image/png']) */
  accept?: string[];
  /** Tamaño máximo por archivo en MB */
  maxSizeMB?: number;
  /** Múltiples archivos */
  multiple?: boolean;

  /** Textos */
  title?: string;
  description?: string;
  buttonLabel?: string;

  /** Ícono superior */
  icon?: React.ReactNode;

  /** Estado visual controlado desde afuera */
  isDragging?: boolean;

  /** Estado visual semántico */
  state?: FileUploadState;

  /** Clases extra */
  className?: string;

  /** Callbacks */
  onFilesChange?: (files: File[]) => void;
  onError?: (errors: string[]) => void;
};

function bytesToMB(bytes: number) {
  return bytes / (1024 * 1024);
}

function getAcceptAttr(accept?: string[]) {
  if (!accept || accept.length === 0) return undefined;
  return accept.join(',');
}

function DefaultUploadIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M24 6c.6 0 1 .4 1 1v18.6l4.3-4.3a1 1 0 0 1 1.4 1.4l-6 6a1 1 0 0 1-1.4 0l-6-6a1 1 0 0 1 1.4-1.4l4.3 4.3V7c0-.6.4-1 1-1Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M10 30a1 1 0 0 1 1 1v5c0 1.7 1.3 3 3 3h20c1.7 0 3-1.3 3-3v-5a1 1 0 1 1 2 0v5c0 2.8-2.2 5-5 5H14c-2.8 0-5-2.2-5-5v-5a1 1 0 0 1 1-1Z"
        fill="currentColor"
        opacity="0.9"
      />
    </svg>
  );
}

const stateStyles: Record<FileUploadState, string> = {
  default: 'border-[--border-default] bg-[--color-white]',
  drag: 'border-[--color-nave-500] bg-[--color-nave-500]/5',
  error: 'border-[--border-error] bg-[--surface-error]',
  disabled:
    'border-[--border-disabled] bg-[--surface-disabled] opacity-60 pointer-events-none',
};

export function FileUpload({
  accept = ['application/pdf', 'image/jpeg', 'image/png'],
  maxSizeMB = 3,
  multiple = false,
  title = 'Hacé clic o arrastrá los archivos para cargarlos',
  description = `Deben ser PDF, JPG o PNG de hasta ${maxSizeMB} MB.`,
  buttonLabel = 'Subir archivo',
  icon,
  state = 'default',
  className,
  onFilesChange,
  onError,
}: FileUploadProps) {
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const isDisabled = state === 'disabled';

  const validateFiles = React.useCallback(
    (files: File[]) => {
      const errors: string[] = [];
      const allowed = new Set((accept ?? []).map((t) => t.toLowerCase()));
      const filtered: File[] = [];

      for (const file of files) {
        const typeOk =
          allowed.size === 0
            ? true
            : allowed.has((file.type || '').toLowerCase());

        const sizeOk = bytesToMB(file.size) <= maxSizeMB;

        if (!typeOk) {
          errors.push(`Tipo no permitido: ${file.name}`);
          continue;
        }

        if (!sizeOk) {
          errors.push(
            `Archivo demasiado grande (${maxSizeMB} MB máx): ${file.name}`
          );
          continue;
        }

        filtered.push(file);
      }

      if (!multiple && filtered.length > 1) {
        errors.push('Solo se permite 1 archivo.');
        return { files: filtered.slice(0, 1), errors };
      }

      return { files: filtered, errors };
    },
    [accept, maxSizeMB, multiple]
  );

  const handlePick = () => {
    if (!isDisabled) inputRef.current?.click();
  };

  const handleFiles = (incoming: File[]) => {
    if (isDisabled) return;

    const { files, errors } = validateFiles(incoming);

    if (errors.length) onError?.(errors);
    if (files.length) onFilesChange?.(files);
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const list = Array.from(e.target.files ?? []);
    handleFiles(list);
    e.target.value = '';
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    if (isDisabled) return;

    e.preventDefault();
    e.stopPropagation();

    const list = Array.from(e.dataTransfer.files ?? []);
    if (list.length) handleFiles(list);
  };

  return (
    <div
      className={cn(
        'w-full rounded-[16px] bg-[--color-white] p-6 sm:p-8',
        className
      )}
    >
      <div
        role="button"
        aria-disabled={isDisabled}
        tabIndex={isDisabled ? -1 : 0}
        onClick={handlePick}
        onKeyDown={(e) => {
          if (!isDisabled && (e.key === 'Enter' || e.key === ' ')) handlePick();
        }}
        onDrop={onDrop}
        onDragOver={(e) => {
          if (isDisabled) return;
          e.preventDefault();
          e.dataTransfer.dropEffect = 'copy';
        }}
        className={cn(
          'w-full rounded-[16px] border border-dashed',
          'px-6 py-10 sm:px-10 sm:py-14',
          'flex flex-col items-center justify-center gap-3 sm:gap-4',
          'outline-none transition-colors',
          stateStyles[state]
        )}
      >
        <div className="text-[--color-text-tertiary]">
          {icon ?? <DefaultUploadIcon />}
        </div>

        <div className="text-center space-y-1">
          <div className="text-base font-[550] leading-[1.3] tracking-[-0.04em] text-[--color-black]">
            {title}
          </div>

          <div className="text-sm leading-[1.3] tracking-[-0.04em] text-[--color-text-tertiary]">
            {description}
          </div>
        </div>

        <div className="pt-2">
          <Button
            variant="secondary"
            disabled={isDisabled}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handlePick();
            }}
          >
            {buttonLabel}
          </Button>
        </div>

        <input
          ref={inputRef}
          type="file"
          className="hidden"
          multiple={multiple}
          disabled={isDisabled}
          accept={getAcceptAttr(accept)}
          onChange={onInputChange}
        />
      </div>
    </div>
  );
}
