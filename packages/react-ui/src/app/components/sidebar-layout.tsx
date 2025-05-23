// import { Separator } from '@radix-ui/react-dropdown-menu';
// import { Link, useLocation } from 'react-router-dom';

// import { buttonVariants } from '@/components/ui/button';
// import { cn } from '@/lib/utils';

// interface SidebarLayoutProps {
//   title: string;
//   items: SidebarItem[];
//   children: React.ReactNode;
// }

// export type SidebarItem = {
//   title: string;
//   href: string;
//   icon: JSX.Element;
//   hasPermission?: boolean;
// };

// interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
//   items: SidebarItem[];
// }

// function SidebarItem({ className, items, ...props }: SidebarNavProps) {
//   const location = useLocation();
//   const linkActive = (item: SidebarItem) =>
//     location.pathname.startsWith(item.href);
//   return (
//     <nav
//       className={cn(
//         'flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1',
//         className,
//       )}
//       {...props}
//     >
//       {items.map((item) => (
//         <Link
//           key={item.href}
//           to={item.href}
//           className={cn(
//             buttonVariants({ variant: 'ghost' }),
//             linkActive(item)
//               ? 'bg-muted hover:bg-muted'
//               : 'hover:bg-transparent hover:underline',
//             'justify-start',
//           )}
//         >
//           <div
//             className={cn(
//               'flex items-center justify-center gap-2',
//               linkActive(item) ? 'text-primary fill-primary' : '',
//             )}
//           >
//             {item.icon}
//             {item.title}
//           </div>
//         </Link>
//       ))}
//     </nav>
//   );
// }

// export default function SidebarLayout({
//   title,
//   items,
//   children,
// }: SidebarLayoutProps) {
//   return (
//     <div className="w-full md:block">
//       <div className="space-y-0.5">
//         <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
//       </div>
//       <Separator className="my-6" />
//       <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
//         <aside className="-mx-4 lg:w-1/5">
//           <SidebarItem items={items} />
//         </aside>
//         <div className="w-full flex-1">{children}</div>
//       </div>
//     </div>
//   );
// }




import React from 'react';
import { Separator } from '@radix-ui/react-dropdown-menu';
import { Link, useLocation } from 'react-router-dom';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SidebarLayoutProps {
  title: string;
  items: SidebarItem[];
  children: React.ReactNode;
}

export type SidebarItem = {
  title: string;
  href: string;
  icon: JSX.Element;
  hasPermission?: boolean;
};

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: SidebarItem[];
}

function SidebarItem({ className, items, ...props }: SidebarNavProps) {
  const location = useLocation();
  const linkActive = (item: SidebarItem) =>
    location.pathname.startsWith(item.href);
    
  return (
    <nav
      className={cn(
        'flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1 glyph-border p-2 rounded-lg',
        className
      )}
      {...props}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            'hover:bg-accent/50 hover:shadow-glyph-inner',
            'transition-all duration-200 font-glyph',
            linkActive(item)
              ? 'bg-primary/10 text-primary shadow-glyph'
              : 'text-foreground/90',
            'justify-start'
          )}
        >
          <div
            className={cn(
              'flex items-center justify-center gap-2',
              linkActive(item) 
                ? 'text-primary fill-primary'
                : 'text-muted-foreground/80'
            )}
          >
            {React.cloneElement(item.icon, {
              className: 'size-4'
            })}
            {item.title}
          </div>
        </Link>
      ))}
    </nav>
  );
}

export default function SidebarLayout({
  title,
  items,
  children,
}: SidebarLayoutProps) {
  return (
    <div className="w-full md:block glyph-pattern p-6 rounded-xl bg-background/95 backdrop-blur-lg">
      <div className="space-y-0.5">
        <h2 className="text-3xl font-bold tracking-tight font-glyph">
          {title}
        </h2>
      </div>
      <Separator className="my-6 bg-border/30" />
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="-mx-4 lg:w-1/5">
          <SidebarItem items={items} />
        </aside>
        <div className="w-full flex-1 bg-background/80 backdrop-blur-sm p-6 rounded-xl shadow-glyph">
          {children}
        </div>
      </div>
    </div>
  );
}