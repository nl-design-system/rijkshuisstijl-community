import {
  IconAlertCircle,
  IconAlertTriangle,
  IconApi,
  IconArrowIteration,
  IconArrowNarrowDown,
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconArrowNarrowUp,
  IconArrowsDiagonal,
  IconArrowsSort,
  IconArrowUpRight,
  IconBackhoe,
  IconBell,
  IconBubble,
  IconCalendarCheck,
  IconCaretDown,
  IconCaretLeft,
  IconCaretRight,
  IconCaretUp,
  IconCheck,
  IconChevronRight,
  IconCircleCheck,
  IconClock,
  IconCloudLock,
  IconCornerLeftUp,
  IconDeviceFloppy,
  IconDeviceMobile,
  IconDotsVertical,
  IconDownload,
  IconEdit,
  IconExternalLink,
  IconEye,
  IconFile,
  IconFilePencil,
  IconGridDots,
  IconHash,
  IconHeart,
  IconHome,
  IconInfoCircle,
  IconInfoSmall,
  IconInfoSquare,
  IconLink,
  IconLock,
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
  IconPower,
  IconPrinter,
  IconQuestionMark,
  IconReload,
  IconRss,
  IconSearch,
  IconSend,
  IconSettings,
  IconShare,
  IconSortAscending,
  IconSortDescending,
  IconSquare,
  IconTransfer,
  IconTrash,
  IconUpload,
  IconUser,
  IconVolume,
  IconVolumeOff,
  IconX,
} from '@tabler/icons-react';
import { Icon as UtrechtIcon, type IconProps as UtrechtIconProps } from '@utrecht/component-library-react';
import { ForwardedRef, forwardRef, PropsWithChildren, ReactNode } from 'react';
import { DutchMapIcon } from './DutchMapIcon';
import { RijkshuisstijlIconID } from './IconTypes';

export const IconenSet: Partial<Record<RijkshuisstijlIconID, ReactNode>> = {
  activiteit: <IconCalendarCheck />,
  'agile-werken': <IconArrowIteration />,
  'alert-circle': <IconAlertCircle />,
  'api-inrichting': <IconApi />,
  'arrows-sort': <IconArrowsSort />,
  audio: <IconVolume />,
  bel: <IconBell />,
  bewerken: <IconEdit />,
  blog: <IconFilePencil />,
  'circle-check': <IconCircleCheck />,
  'chevron-right': <IconChevronRight />,
  comment: <IconMessageDots />,
  communicatie: <IconBubble />,
  delen: <IconShare />,
  'delta-naar-links': <IconCaretLeft />,
  'delta-naar-rechts': <IconCaretRight />,
  'delta-omhoog': <IconCaretUp />,
  'delta-omlaag': <IconCaretDown />,
  'diagonale-pijl': <IconArrowUpRight />,
  downloaden: <IconDownload />,
  'externe-link': <IconExternalLink />,
  favoriet: <IconHeart />,
  'foto-vergroten': <IconArrowsDiagonal />,
  gegevensuitwisseling: <IconTransfer />,
  'geluid-aan': <IconVolume />,
  'geluid-uit': <IconVolumeOff />,
  'haakse-pijl': <IconCornerLeftUp />,
  hashtag: <IconHash />,
  home: <IconHome />,
  info: <IconInfoSmall />,
  'info-circle': <IconInfoCircle />,
  'info-square': <IconInfoSquare />,
  inloggen: <IconLogin2 />,
  instellingen: <IconSettings />,
  'interne-link': <IconLink />,
  kalender: <IconCalendarCheck />,
  klok: <IconClock />,
  kruis: <IconX />,
  'let-op-met-loep': <IconAlertCircle />,
  'let-op': <IconAlertTriangle />,
  locatiemarker: <IconMapPin />,
  mail: <IconMail />,
  meer: <IconDotsVertical />,
  menu: <IconMenu2 />,
  'nederland-map': <DutchMapIcon />,
  nieuws: <IconNews />,
  paperclip: <IconPaperclip />,
  'permanent-beta': <IconBackhoe />,
  'pijl-naar-rechts': <IconArrowNarrowRight />,
  'pijl-naar-rechtsboven': <IconArrowUpRight />,
  'pijl-omhoog': <IconArrowNarrowUp />,
  'pijl-omlaag': <IconArrowNarrowDown />,
  plus: <IconPlus />,
  printer: <IconPrinter />,
  publicatie: <IconFile />,
  'rechte-pijl': <IconArrowNarrowUp />,
  refresh: <IconReload />,
  rss: <IconRss />,
  save: <IconDeviceFloppy />,
  'secure-link': <IconLock />,
  smartphone: <IconDeviceMobile />,
  'sort-ascending': <IconSortAscending />,
  'sort-descending': <IconSortDescending />,
  tegelweergave: <IconGridDots />,
  telefoon: <IconPhone />,
  terug: <IconArrowNarrowLeft />,
  toegankelijkheid: <IconEye />,
  toelichting: <IconSquare />,
  'uit-aanknop': <IconPower />,
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

export interface IconProps extends UtrechtIconProps {
  icon?: ReactNode;
}

export const Icon = forwardRef(
  ({ children, icon, className, ...restProps }: PropsWithChildren<IconProps>, ref: ForwardedRef<HTMLSpanElement>) => {
    return (
      <UtrechtIcon className={className} ref={ref} {...restProps}>
        {icon && IconenSet[icon as keyof typeof IconenSet]}
        {children}
      </UtrechtIcon>
    );
  },
);

Icon.displayName = 'Icon';