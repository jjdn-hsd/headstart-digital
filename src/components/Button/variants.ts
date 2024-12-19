export const getButtonVariantClasses = (variant: string): string => {
  const variants = {
    primary: 'bg-brand-primary text-neutral-50 hover:bg-brand-dark',
    secondary: 'bg-neutral-50 text-brand-primary hover:bg-brand-light hover:text-neutral-50',
    outline: 'border-2 border-neutral-50 text-neutral-50 hover:bg-neutral-50 hover:text-brand-primary',
  };

  return variants[variant as keyof typeof variants] || variants.primary;
};