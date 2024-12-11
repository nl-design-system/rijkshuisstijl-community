import * as Icons from '@tabler/icons-react';
import { Icon as UtrechtIcon, type IconProps as UtrechtIconProps } from '@utrecht/component-library-react';
import { ForwardedRef, forwardRef, PropsWithChildren, ReactNode } from 'react';
import { DutchMapIcon } from './DutchMapIcon';
import { RijkshuisstijlIconID } from './IconTypes';

export const IconenSet: Partial<Record<RijkshuisstijlIconID, ReactNode>> = {
  activiteit: <Icons.IconCalendarCheck />,
  'agile-werken': <Icons.IconArrowIteration />,
  'alert-circle': <Icons.IconAlertCircle />,
  'api-inrichting': <Icons.IconApi />,
  'arrows-sort': <Icons.IconArrowsSort />,
  audio: <Icons.IconVolume />,
  bel: <Icons.IconBell />,
  bewerken: <Icons.IconEdit />,
  blog: <Icons.IconFilePencil />,
  briefcase: <Icons.IconBriefcase />,
  'circle-check': <Icons.IconCircleCheck />,
  'chevron-right': <Icons.IconChevronRight />,
  comment: <Icons.IconMessageDots />,
  communicatie: <Icons.IconBubble />,
  delen: <Icons.IconShare />,
  'delta-naar-links': <Icons.IconCaretLeft />,
  'delta-naar-rechts': <Icons.IconCaretRight />,
  'delta-omhoog': <Icons.IconCaretUp />,
  'delta-omlaag': <Icons.IconCaretDown />,
  'diagonale-pijl': <Icons.IconArrowUpRight />,
  downloaden: <Icons.IconDownload />,
  inbox: <Icons.IconInbox />,
  'currency-euro': <Icons.IconCurrencyEuro />,
  'externe-link': <Icons.IconExternalLink />,
  favoriet: <Icons.IconHeart />,
  'foto-vergroten': <Icons.IconArrowsDiagonal />,
  gegevensuitwisseling: <Icons.IconTransfer />,
  'geluid-aan': <Icons.IconVolume />,
  'geluid-uit': <Icons.IconVolumeOff />,
  'haakse-pijl': <Icons.IconCornerLeftUp />,
  hashtag: <Icons.IconHash />,
  home: <Icons.IconHome />,
  info: <Icons.IconInfoSmall />,
  'info-circle': <Icons.IconInfoCircle />,
  'info-square': <Icons.IconInfoSquare />,
  inloggen: <Icons.IconLogin2 />,
  instellingen: <Icons.IconSettings />,
  'interne-link': <Icons.IconLink />,
  kalender: <Icons.IconCalendarCheck />,
  klok: <Icons.IconClock />,
  kruis: <Icons.IconX />,
  'let-op-met-loep': <Icons.IconAlertCircle />,
  'let-op': <Icons.IconAlertTriangle />,
  locatiemarker: <Icons.IconMapPin />,
  mail: <Icons.IconMail />,
  meer: <Icons.IconDotsVertical />,
  menu: <Icons.IconMenu2 />,
  'nederland-map': <DutchMapIcon />,
  nieuws: <Icons.IconNews />,
  paperclip: <Icons.IconPaperclip />,
  'permanent-beta': <Icons.IconBackhoe />,
  'pijl-naar-rechts': <Icons.IconArrowNarrowRight />,
  'pijl-naar-rechtsboven': <Icons.IconArrowUpRight />,
  'pijl-omhoog': <Icons.IconArrowNarrowUp />,
  'pijl-omlaag': <Icons.IconArrowNarrowDown />,
  plus: <Icons.IconPlus />,
  printer: <Icons.IconPrinter />,
  publicatie: <Icons.IconFile />,
  'rechte-pijl': <Icons.IconArrowNarrowUp />,
  refresh: <Icons.IconReload />,
  rss: <Icons.IconRss />,
  save: <Icons.IconDeviceFloppy />,
  'secure-link': <Icons.IconLock />,
  smartphone: <Icons.IconDeviceMobile />,
  'sort-ascending': <Icons.IconSortAscending />,
  'sort-descending': <Icons.IconSortDescending />,
  tegelweergave: <Icons.IconGridDots />,
  telefoon: <Icons.IconPhone />,
  terug: <Icons.IconArrowNarrowLeft />,
  toegankelijkheid: <Icons.IconEye />,
  toelichting: <Icons.IconSquare />,
  'uit-aanknop': <Icons.IconPower />,
  upload: <Icons.IconUpload />,
  user: <Icons.IconUser />,
  versleutelen: <Icons.IconCloudLock />,
  verwijderen: <Icons.IconTrash />,
  verzenden: <Icons.IconSend />,
  video: <Icons.IconPlayerPlay />,
  vinkje: <Icons.IconCheck />,
  vraagteken: <Icons.IconQuestionMark />,
  zoek: <Icons.IconSearch />,
};

export const iconOptions = Object.keys(IconenSet);

export interface IconProps extends UtrechtIconProps {
  icon?: RijkshuisstijlIconID;
}

export const Icon = forwardRef(
  ({ children, icon, className, ...restProps }: PropsWithChildren<IconProps>, ref: ForwardedRef<HTMLSpanElement>) => {
    return (
      <UtrechtIcon className={className} ref={ref} {...restProps}>
        {icon && IconenSet[icon]}
        {children}
      </UtrechtIcon>
    );
  },
);

Icon.displayName = 'Icon';
