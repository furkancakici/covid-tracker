import { Languages } from 'lucide-react'

import { Button } from '@/components/atoms/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/components/atoms/ui/dropdown-menu'
import i18n from '@/i18n'

const clickHandler = async (lang: string) => {
    await i18n.changeLanguage(lang)
}

const TranslateToggle = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='outline' size='icon'>
                    <Languages className='h-[1.2rem] w-[1.2rem] transition-all' />
                    <span className='sr-only'>Translate toggle</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
                <DropdownMenuItem onClick={() => clickHandler('tr')}>TR</DropdownMenuItem>
                <DropdownMenuItem onClick={() => clickHandler('en')}>EN</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default TranslateToggle
