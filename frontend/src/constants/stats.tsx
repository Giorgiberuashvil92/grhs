import { CategoryIcon, ChatIcon, VideoIcon } from '../components/ui/icons';
import { JSX } from 'react';

interface StatItem {
  label: string;
  icon: JSX.Element;
}

export const stats: StatItem[] = [
  {
    label: "15 категорий",
    icon: <CategoryIcon />
  },
  {
    label: "Онлайн-чат",
    icon: <ChatIcon />
  },
  {
    label: "1000+ уроков",
    icon: <VideoIcon />
  }
]; 