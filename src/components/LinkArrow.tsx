import { ArrowLeft02Icon, ArrowRight02Icon, ArrowUpRight01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

const icons = {
  left: ArrowLeft02Icon,
  right: ArrowRight02Icon,
  'up-right': ArrowUpRight01Icon,
}

export default function LinkArrow({ direction = 'right' }: { direction?: keyof typeof icons }) {
  return <HugeiconsIcon className={`link-arrow link-arrow-${direction}`} icon={icons[direction]} size={16} strokeWidth={1.8} aria-hidden="true" />
}
