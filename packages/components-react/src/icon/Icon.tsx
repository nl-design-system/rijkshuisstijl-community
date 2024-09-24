import {
  IconArrowNarrowLeft,
  IconBell,
  IconBubble,
  IconCalendarCheck,
  IconCheck,
  IconClock,
  IconCloudLock,
  IconDeviceFloppy,
  IconDeviceMobile,
  IconDotsVertical,
  IconDownload,
  IconEdit,
  IconEye,
  IconFile,
  IconFilePencil,
  IconGridDots,
  IconHash,
  IconHeart,
  IconHome,
  IconInfoSquare,
  IconLogin2,
  IconMail,
  IconMapPin,
  IconMenu2,
  IconMessageDots,
  IconNews,
  IconPaperclip,
  IconPhone,
  IconPlayerPlay,
  IconPlus,
  IconPrinter,
  IconQuestionMark,
  IconReload,
  IconRss,
  IconSearch,
  IconSend,
  IconSettings,
  IconShare,
  IconSquare,
  IconTransfer,
  IconTrash,
  IconUpload,
  IconUser,
  IconVolume,
  IconX,
} from '@tabler/icons-react';
import { Icon as UtrechtIcon } from '@utrecht/component-library-react';
import { PropsWithChildren } from 'react';
import { RijkshuisstijlIconID } from './IconTypes';

export const IconenSet: Partial<Record<RijkshuisstijlIconID, any>> = {
  activiteit: <IconCalendarCheck />,
  audio: <IconVolume />,
  bel: <IconBell />,
  bewerken: <IconEdit />,
  blog: <IconFilePencil />,
  comment: <IconMessageDots />,
  communicatie: <IconBubble />,
  delen: <IconShare />,
  downloaden: <IconDownload />,
  favoriet: <IconHeart />,
  gegevensuitwisseling: <IconTransfer />,
  hashtag: <IconHash />,
  home: <IconHome />,
  info: <IconInfoSquare />,
  inloggen: <IconLogin2 />,
  instellingen: <IconSettings />,
  kalender: <IconCalendarCheck />,
  klok: <IconClock />,
  kruis: <IconX />,
  locatiemarker: <IconMapPin />,
  mail: <IconMail />,
  meer: <IconDotsVertical />,
  menu: <IconMenu2 />,
  nieuws: <IconNews />,
  paperclip: <IconPaperclip />,
  plus: <IconPlus />,
  printer: <IconPrinter />,
  publicatie: <IconFile />,
  refresh: <IconReload />,
  rss: <IconRss />,
  save: <IconDeviceFloppy />,
  smartphone: <IconDeviceMobile />,
  tegelweergave: <IconGridDots />,
  telefoon: <IconPhone />,
  terug: <IconArrowNarrowLeft />,
  toegankelijkheid: <IconEye />,
  toelichting: <IconSquare />,
  upload: <IconUpload />,
  user: <IconUser />,
  versleutelen: <IconCloudLock />,
  verwijderen: <IconTrash />,
  verzenden: <IconSend />,
  video: <IconPlayerPlay />,
  vinkje: <IconCheck />,
  vraagteken: <IconQuestionMark />,
  zoek: <IconSearch />,
};

export const iconOptions = Object.keys(IconenSet);

interface IconProps {
  icon?: any;
}

export const Icon = ({ children, icon }: PropsWithChildren<IconProps>) => {
  return (
    <UtrechtIcon>
      {icon && IconenSet[icon as keyof typeof IconenSet]}
      {children}
    </UtrechtIcon>
  );
};
