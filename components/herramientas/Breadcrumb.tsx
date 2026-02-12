import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 text-sm mb-8" aria-label="Breadcrumb">
      <Link
        href="/"
        className="text-text-muted hover:text-primary transition-colors duration-300"
      >
        <i className="fas fa-home"></i>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div key={index} className="flex items-center gap-2">
            <i className="fas fa-chevron-right text-text-muted text-xs"></i>
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="text-text-muted hover:text-primary transition-colors duration-300 capitalize"
              >
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? 'text-primary font-medium capitalize' : 'text-text-muted capitalize'}>
                {item.label}
              </span>
            )}
          </div>
        );
      })}
    </nav>
  );
}
