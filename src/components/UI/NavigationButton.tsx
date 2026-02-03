import { LayoutDashboard, ArrowLeftRight, Settings, CalendarClock, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface IProps {
    image: "LayoutDashboard" | "ArrowLeftRight" | "Settings" | "CalendarClock" | "LogOut";
    name: string;
    collapsed?: boolean;
    linkTo: string;
    onClick?: () => void;
}

const iconMap = {
    LayoutDashboard,
    ArrowLeftRight,
    Settings,
    CalendarClock,
    LogOut
};

const NavigationButton = ({ image, name, collapsed, linkTo, onClick }: IProps) => {
    const IconComponent = iconMap[image];
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(linkTo);
        onClick?.();
    };

    return (
        <div className="p-4 w-full gap-2 rounded-lg flex justify-start items-center align-baseline text-white hover:bg-[#1f2b4b] cursor-pointer focus:bg-[#1f2b4b] transition-all" onClick={handleClick}>
            <IconComponent size={24} />
            {!collapsed && (
                <span className="whitespace-nowrap">{name}</span>
            )}
        </div>
    )
}

export default NavigationButton