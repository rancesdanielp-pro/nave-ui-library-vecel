'use client';

import * as React from 'react';
import { cn } from '../../../../utils/cn';
import { Button } from '../../buttons';

export type FileUploadFile = {
  id: string;
  file: File;
  previewUrl?: string;
};

export type FileUploadProps = {
  /** Tipos permitidos (ej: ['application/pdf','image/jpeg','image/png']) */
  accept?: string[];
  /** Tamaño máximo por archivo en MB */
  maxSizeMB?: number;
  /** Múltiples archivos */
  multiple?: boolean;

  /** Textos (como Figma) */
  title?: string;
  description?: string;
  buttonLabel?: string;

  /** Ícono superior (40x40). Si no lo pasás, usa uno default inline SVG */
  icon?: React.ReactNode;

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
  // icon 40x40 aprox como el de figma (tray + arrow)
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

export function FileUpload({
  accept = ['application/pdf', 'image/jpeg', 'image/png'],
  maxSizeMB = 3,
  multiple = false,

  title = 'Hacé clic o arrastrá los archivos para cargarlos',
  description = `Deben ser PDF, JPG o PNG de hasta ${maxSizeMB} MB.`,
  buttonLabel = 'Subir archivo',

  icon,
  className,

  onFilesChange,
  onError,
}: FileUploadProps) {
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const [isDragging, setIsDragging] = React.useState(false);

  const validateFiles = React.useCallback(
    (files: File[]) => {
      const errors: string[] = [];

      const allowed = new Set((accept ?? []).map((t) => t.toLowerCase()));
      const filtered: File[] = [];

      for (const f of files) {
        const typeOk =
          allowed.size === 0 ? true : allowed.has((f.type || '').toLowerCase());

        const sizeOk = bytesToMB(f.size) <= maxSizeMB;

        if (!typeOk) {
          errors.push(`Tipo no permitido: ${f.name}`);
          continue;
        }
        if (!sizeOk) {
          errors.push(
            `Archivo demasiado grande (${maxSizeMB} MB máx): ${f.name}`
          );
          continue;
        }

        filtered.push(f);
      }

      if (!multiple && filtered.length > 1) {
        errors.push('Solo se permite 1 archivo.');
        return { files: filtered.slice(0, 1), errors };
      }

      return { files: filtered, errors };
    },
    [accept, maxSizeMB, multiple]
  );

  const handlePick = React.useCallback(() => {
    inputRef.current?.click();
  }, []);

  const handleFiles = React.useCallback(
    (incoming: File[]) => {
      const { files, errors } = validateFiles(incoming);

      if (errors.length) onError?.(errors);
      if (files.length) onFilesChange?.(files);
    },
    [onError, onFilesChange, validateFiles]
  );

  const onInputChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const list = Array.from(e.target.files ?? []);
      handleFiles(list);
      // reset para permitir subir el mismo archivo otra vez
      e.target.value = '';
    },
    [handleFiles]
  );

  const onDrop = React.useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);

      const list = Array.from(e.dataTransfer.files ?? []);
      if (list.length) handleFiles(list);
    },
    [handleFiles]
  );

  const onDragOver = React.useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    // necesario para que el drop funcione
    e.dataTransfer.dropEffect = 'copy';
    setIsDragging(true);
  }, []);

  const onDragLeave = React.useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
    },
    []
  );

  return (
    <div
      className={cn(
        'w-full rounded-[16px] bg-white p-6 sm:p-8',
        className
      )}
    >
      <div
        role="button"
        tabIndex={0}
        onClick={handlePick}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') handlePick();
        }}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        className={cn(
          'w-full rounded-[16px] border border-dashed',
          'px-6 py-10 sm:px-10 sm:py-14',
          'flex flex-col items-center justify-center gap-3 sm:gap-4',
          'outline-none transition-colors',
          isDragging
            ? 'border-[#652BDF] bg-[#652BDF]/5'
            : 'border-[#DADDE3] bg-white'
        )}
      >
        <div className="text-[#6C7280]">{icon ?? <DefaultUploadIcon />}</div>

        <div className="text-center space-y-1">
          <div className="text-[16px] font-[550] leading-[1.3] tracking-[-0.04em] text-[#111827]">
            {title}
          </div>

          <div className="text-[14px] font-normal leading-[1.3] tracking-[-0.04em] text-[#6B7280]">
            {description}
          </div>
        </div>

        <div className="pt-2">
          <Button
            variant="secondary"
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
          accept={getAcceptAttr(accept)}
          onChange={onInputChange}
        />
      </div>
    </div>
  );
}

/*
USO:

<FileUpload
  multiple
  accept={['application/pdf','image/jpeg','image/png']}
  maxSizeMB={3}
  onFilesChange={(files) => console.log(files)}
  onError={(errs) => console.log(errs)}
/>

Si querés controlar "preview" y listado de archivos, lo armamos encima de esto.
*/
