import * as TablerIcons from '@tabler/icons-react';
import { Icon as UtrechtIcon, type IconProps as UtrechtIconProps } from '@utrecht/component-library-react';
import { ForwardedRef, forwardRef, PropsWithChildren, ReactNode } from 'react';
import { DutchMapIcon } from './DutchMapIcon';
import { RHCIconID } from './RHCIconIDs';

let iconSet: Partial<Record<RHCIconID | string, ReactNode>> = {
  activiteit: <TablerIcons.IconCalendarCheck />,
  'agile-werken': <TablerIcons.IconArrowIteration />,
  'alert-circle': <TablerIcons.IconAlertCircle />,
  'api-inrichting': <TablerIcons.IconApi />,
  'arrows-sort': <TablerIcons.IconArrowsSort />,
  audio: <TablerIcons.IconVolume />,
  bel: <TablerIcons.IconBell />,
  bewerken: <TablerIcons.IconEdit />,
  blog: <TablerIcons.IconFilePencil />,
  briefcase: <TablerIcons.IconBriefcase />,
  car: <TablerIcons.IconCar />,
  'circle-check': <TablerIcons.IconCircleCheck />,
  'chevron-right': <TablerIcons.IconChevronRight />,
  comment: <TablerIcons.IconMessageDots />,
  communicatie: <TablerIcons.IconBubble />,
  delen: <TablerIcons.IconShare />,
  'delta-naar-links': <TablerIcons.IconCaretLeft />,
  'delta-naar-rechts': <TablerIcons.IconCaretRight />,
  'delta-omhoog': <TablerIcons.IconCaretUp />,
  'delta-omlaag': <TablerIcons.IconCaretDown />,
  'diagonale-pijl': <TablerIcons.IconArrowUpRight />,
  downloaden: <TablerIcons.IconDownload />,
  inbox: <TablerIcons.IconInbox />,
  'currency-euro': <TablerIcons.IconCurrencyEuro />,
  'externe-link': <TablerIcons.IconExternalLink />,
  favoriet: <TablerIcons.IconHeart />,
  'foto-vergroten': <TablerIcons.IconArrowsDiagonal />,
  gegevensuitwisseling: <TablerIcons.IconTransfer />,
  'geluid-aan': <TablerIcons.IconVolume />,
  'geluid-uit': <TablerIcons.IconVolumeOff />,
  'haakse-pijl': <TablerIcons.IconCornerLeftUp />,
  hashtag: <TablerIcons.IconHash />,
  home: <TablerIcons.IconHome />,
  info: <TablerIcons.IconInfoSmall />,
  'info-circle': <TablerIcons.IconInfoCircle />,
  'info-square': <TablerIcons.IconInfoSquare />,
  inloggen: <TablerIcons.IconLogin2 />,
  instellingen: <TablerIcons.IconSettings />,
  'interne-link': <TablerIcons.IconLink />,
  kalender: <TablerIcons.IconCalendarCheck />,
  klok: <TablerIcons.IconClock />,
  kruis: <TablerIcons.IconX />,
  'let-op-met-loep': <TablerIcons.IconAlertCircle />,
  'let-op': <TablerIcons.IconAlertTriangle />,
  locatiemarker: <TablerIcons.IconMapPin />,
  mail: <TablerIcons.IconMail />,
  meer: <TablerIcons.IconDotsVertical />,
  menu: <TablerIcons.IconMenu2 />,
  'nederland-map': <DutchMapIcon />,
  nieuws: <TablerIcons.IconNews />,
  paperclip: <TablerIcons.IconPaperclip />,
  'permanent-beta': <TablerIcons.IconBackhoe />,
  'pijl-naar-rechts': <TablerIcons.IconArrowNarrowRight />,
  'pijl-naar-rechtsboven': <TablerIcons.IconArrowUpRight />,
  'pijl-omhoog': <TablerIcons.IconArrowNarrowUp />,
  'pijl-omlaag': <TablerIcons.IconArrowNarrowDown />,
  plus: <TablerIcons.IconPlus />,
  printer: <TablerIcons.IconPrinter />,
  publicatie: <TablerIcons.IconFile />,
  'rechte-pijl': <TablerIcons.IconArrowNarrowUp />,
  refresh: <TablerIcons.IconReload />,
  rss: <TablerIcons.IconRss />,
  save: <TablerIcons.IconDeviceFloppy />,
  school: <TablerIcons.IconSchool />,
  'secure-link': <TablerIcons.IconLock />,
  smartphone: <TablerIcons.IconDeviceMobile />,
  'sort-ascending': <TablerIcons.IconSortAscending />,
  'sort-descending': <TablerIcons.IconSortDescending />,
  tegelweergave: <TablerIcons.IconGridDots />,
  telefoon: <TablerIcons.IconPhone />,
  terug: <TablerIcons.IconArrowNarrowLeft />,
  toegankelijkheid: <TablerIcons.IconEye />,
  toelichting: <TablerIcons.IconSquare />,
  'uit-aanknop': <TablerIcons.IconPower />,
  upload: <TablerIcons.IconUpload />,
  user: <TablerIcons.IconUser />,
  versleutelen: <TablerIcons.IconCloudLock />,
  verwijderen: <TablerIcons.IconTrash />,
  verzenden: <TablerIcons.IconSend />,
  video: <TablerIcons.IconPlayerPlay />,
  vinkje: <TablerIcons.IconCheck />,
  vraagteken: <TablerIcons.IconQuestionMark />,
  zoek: <TablerIcons.IconSearch />,
};

export const registerIconSet = (newIconSet: typeof iconSet) => {
  iconSet = { ...iconSet, ...newIconSet };
};

export const getIconSet = () => ({ ...iconSet });

export { type RHCIconID };

export interface IconProps extends UtrechtIconProps {
  icon?: RHCIconID | string;
}

export const Icon = forwardRef(
  ({ children, icon, className, ...restProps }: PropsWithChildren<IconProps>, ref: ForwardedRef<HTMLSpanElement>) => {
    return (
      <UtrechtIcon className={className} ref={ref} {...restProps}>
        {icon && iconSet[icon]}
        {children}
      </UtrechtIcon>
    );
  },
);

Icon.displayName = 'Icon';
