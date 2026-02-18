'use client';

import * as React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Sidebar } from '@/packages/ui-library/dist/react';

// 1. Definimos el icono fuera del render para evitar recrearlo innecesariamente
const dotIcon = <span className="h-2 w-2 rounded-full bg-[#9CA3AF]" />;

export default function NavigationPage() {
  const pathname = usePathname();
  const router = useRouter();
  const [collapsed, setCollapsed] = React.useState(false);
  const handleItemClick = (href: string) => {
    router.push(href);
  };

  // 2. Definimos las secciones como una constante (puedes usar useMemo si los datos fueran dinámicos de una API,
  // pero para una guía estática, la constante es suficiente).
  const sections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      items: [
        {
          id: 'intro',
          label: 'Introduction',
          href: '/docs',
          active: pathname === '/docs',
          icon: dotIcon,
        },
      ],
    },
    {
      id: 'foundations',
      title: 'Foundations',
      items: [
        {
          id: 'icon',
          label: 'Icon',
          href: '/docs/icon',
          active: pathname === '/docs/icon',
          icon: dotIcon,
        },
        {
          id: 'label',
          label: 'Label',
          href: '/docs/label',
          active: pathname === '/docs/label',
          icon: dotIcon,
        },
        {
          id: 'colors',
          label: 'colors',
          href: '/docs/color',
          active: pathname === '/docs/color',
          icon: dotIcon,
        },
        {
          id: 'typography',
          label: 'typography',
          href: '/docs/typography',
          active: pathname === '/docs/typography',
          icon: dotIcon,
        },
      ],
    },
    {
      id: 'actions',
      title: 'Actions',
      items: [
        {
          id: 'buttons',
          label: 'Buttons',
          href: '/docs/buttons',
          active: pathname === '/docs/buttons',
          icon: dotIcon,
        },
      ],
    },
    {
      id: 'feedback',
      title: 'Feedback',
      items: [
        {
          id: 'alert',
          label: 'Alerts',
          href: '/docs/alert',
          active: pathname === '/docs/alert',
          icon: dotIcon,
        },
        {
          id: 'badge',
          label: 'Badge',
          href: '/docs/badge',
          active: pathname === '/docs/badge',
          icon: dotIcon,
        },
        {
          id: 'banner',
          label: 'Banners',
          href: '/docs/banner',
          active: pathname === '/docs/banner',
          icon: dotIcon,
        },
        {
          id: 'promoBanner',
          label: 'Promo Banners',
          href: '/docs/promoBanner',
          active: pathname === '/docs/promoBanner',
          icon: dotIcon,
        },
        {
          id: 'loader',
          label: 'Loaders',
          href: '/docs/loader',
          active: pathname === '/docs/loader',
          icon: dotIcon,
        },
        {
          id: 'progress',
          label: 'Progress',
          href: '/docs/barprogress',
          active: pathname === '/docs/barprogress',
          icon: dotIcon,
        },
        {
          id: 'emptyState',
          label: 'Empty State',
          href: '/docs/emptyState',
          active: pathname === '/docs/emptyState',
          icon: dotIcon,
        },
        {
          id: 'tooltip',
          label: 'Tooltip',
          href: '/docs/tooltip',
          active: pathname === '/docs/tooltip',
          icon: dotIcon,
        },
      ],
    },
    {
      id: 'navigation',
      title: 'Navigation',
      items: [
        {
          id: 'navbar',
          label: 'Navbar',
          href: '/docs/navbar',
          active: pathname === '/docs/navbar',
          icon: dotIcon,
        },
        {
          id: 'sidebar',
          label: 'Sidebar',
          href: '/docs/sidebar',
          active: pathname === '/docs/sidebar',
          icon: dotIcon,
        },
        {
          id: 'tabs',
          label: 'Tabs',
          href: '/docs/tabs',
          active: pathname === '/docs/tabs',
          icon: dotIcon,
        },
        {
          id: 'pagination',
          label: 'Pagination',
          href: '/docs/pagination',
          active: pathname === '/docs/pagination',
          icon: dotIcon,
        },
        {
          id: 'breadcrumbs',
          label: 'Breadcrumbs',
          href: '/docs/breadcrumb',
          active: pathname === '/docs/breadcrumb',
          icon: dotIcon,
        },
      ],
    },
    {
      id: 'data-display',
      title: 'Data Display',
      items: [
        {
          id: 'avatar',
          label: 'Avatars',
          href: '/docs/avatar',
          active: pathname === '/docs/avatar',
          icon: dotIcon,
        },
        {
          id: 'cards',
          label: 'Cards',
          href: '/docs/cards',
          active: pathname === '/docs/cards',
          icon: dotIcon,
        },
        {
          id: 'colorCards',
          label: 'colorCards',
          href: '/docs/colorExample',
          active: pathname === '/docs/colorExample',
          icon: dotIcon,
        },
        {
          id: 'integrationCard',
          label: 'Integration Cards',
          href: '/docs/integrationCard',
          active: pathname === '/docs/integrationCard',
          icon: dotIcon,
        },
        {
          id: 'table',
          label: 'Tables',
          href: '/docs/table',
          active: pathname === '/docs/table',
          icon: dotIcon,
        },
        /*
        {
          id: 'listItem',
          label: 'Lists',
          href: '/docs/listItem',
          active: pathname === '/docs/listItem',
          icon: dotIcon
        },
        */
        {
          id: 'dragSlider',
          label: 'Sliders',
          href: '/docs/dragSlider',
          active: pathname === '/docs/dragSlider',
          icon: dotIcon,
        },
        {
          id: 'calendar',
          label: 'Calendar',
          href: '/docs/calendar',
          active: pathname === '/docs/calendar',
          icon: dotIcon,
        },
      ],
    },
    {
      id: 'forms',
      title: 'Forms',
      items: [
        {
          id: 'input',
          label: 'Inputs',
          href: '/docs/input',
          active: pathname === '/docs/input',
          icon: dotIcon,
        },
        {
          id: 'password',
          label: 'Inputs Password',
          href: '/docs/password',
          active: pathname === '/docs/password',
          icon: dotIcon,
        },
        {
          id: 'textarea',
          label: 'Inputs Textarea',
          href: '/docs/textarea',
          active: pathname === '/docs/textarea',
          icon: dotIcon,
        },
        {
          id: 'checkbox',
          label: 'Checkbox',
          href: '/docs/checkbox',
          active: pathname === '/docs/checkbox',
          icon: dotIcon,
        },
        {
          id: 'switch',
          label: 'Switch',
          href: '/docs/switch',
          active: pathname === '/docs/switch',
          icon: dotIcon,
        },
        {
          id: 'radiogroup',
          label: 'Radiogroup',
          href: '/docs/radiogroup',
          active: pathname === '/docs/radiogroup',
          icon: dotIcon,
        },
        {
          id: 'combobox',
          label: 'Combobox | Select',
          href: '/docs/combobox',
          active: pathname === '/docs/combobox',
          icon: dotIcon,
        },
        {
          id: 'search',
          label: 'Search Bar',
          href: '/docs/search',
          active: pathname === '/docs/search',
          icon: dotIcon,
        },
        {
          id: 'datepicker',
          label: 'Datepicker',
          href: '/docs/datepicker',
          active: pathname === '/docs/datepicker',
          icon: dotIcon,
        },
        {
          id: 'fileUpload',
          label: 'File Upload',
          href: '/docs/fileUpload',
          active: pathname === '/docs/fileUpload',
          icon: dotIcon,
        },
      ],
    },
    {
      id: 'overlays',
      title: 'Overlays',
      items: [
        {
          id: 'dropdown',
          label: 'Dropdown',
          href: '/docs/dropdown',
          active: pathname === '/docs/dropdown',
          icon: dotIcon,
        },
        {
          id: 'popover',
          label: 'Popover',
          href: '/docs/popover',
          active: pathname === '/docs/popover',
          icon: dotIcon,
        },
        {
          id: 'modaldialog',
          label: 'Modal Dialog',
          href: '/docs/modaldialog',
          active: pathname === '/docs/modaldialog',
          icon: dotIcon,
        },
        {
          id: 'drawer',
          label: 'Drawer',
          href: '/docs/drawer',
          active: pathname === '/docs/drawer',
          icon: dotIcon,
        },
        {
          id: 'accordion',
          label: 'Accordion',
          href: '/docs/accordion',
          active: pathname === '/docs/accordion',
          icon: dotIcon,
        },
      ],
    },
    /*
    {
      id: 'overview',
      title: 'Overview',
      items: [
        {
          id: 'overview',
          label: 'Overview',
          href: '/docs/overview',
          active: pathname === '/docs/overview',
          icon: dotIcon,
        },
      ],
    },
    */
    /*
    {
      id: 'widgets',
      title: 'Widgets',
      items: [
        {
          id: 'lastmovement',
          label: 'LastMovement',
          href: '/docs/widgets',
          active: pathname === '/docs/widgets',
          icon: dotIcon
        },
        {
          id: 'unknown-purchase',
          label: 'UnknownPurchase',
          href: '/docs/widgets/uknown-purchase',
          active: pathname === '/docs/widgets/uknown-purchase',
          icon: dotIcon
        },
      ],
    },
    */
    {
      id: 'tokens',
      title: 'Design',
      items: [
        {
          id: 'themes',
          label: 'Design Themes',
          href: '/docs/formtokens',
          active: pathname === '/docs/formtokens',
          icon: dotIcon,
        },
      ],
    },
  ];

  return (
    <Sidebar
      title="Design System"
      collapsed={collapsed}
      onToggleCollapse={() => setCollapsed((v) => !v)}
      sections={sections}
      onItemClick={handleItemClick}
    />
  );
}
