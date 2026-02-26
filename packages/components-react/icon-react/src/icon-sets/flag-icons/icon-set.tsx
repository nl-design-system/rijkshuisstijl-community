import { ReactNode } from 'react';
import { BGFlagIcon } from './BGFlagIcon';
import { DEFlagIcon } from './DEFlagIcon';
import { ESFlagIcon } from './ESFlagIcon';
import { FRFlagIcon } from './FRFlagIcon';
import { FlagIconIDs } from './FlagIconIDs';
import { GRFlagIcon } from './GRFlagIcon';
import { HUFlagIcon } from './HUFlagIcon';
import { ITFlagIcon } from './ITFlagIcon';
import { LVFlagIcon } from './LVFlagIcon';
import { NLFlagIcon } from './NLFlagIcon';
import { PLFlagIcon } from './PLFlagIcon';
import { PTFlagIcon } from './PTFlagIcon';
import { ROFlagIcon } from './ROFlagIcon';
import { SKFlagIcon } from './SKFlagIcon';
import { UKFlagIcon } from './UKFlagIcon';

export const iconSet: Partial<Record<FlagIconIDs, ReactNode>> = {
  'bg-flag': <BGFlagIcon />,
  'de-flag': <DEFlagIcon />,
  'es-flag': <ESFlagIcon />,
  'fr-flag': <FRFlagIcon />,
  'gr-flag': <GRFlagIcon />,
  'hu-flag': <HUFlagIcon />,
  'it-flag': <ITFlagIcon />,
  'lv-flag': <LVFlagIcon />,
  'nl-flag': <NLFlagIcon />,
  'pl-flag': <PLFlagIcon />,
  'pt-flag': <PTFlagIcon />,
  'ro-flag': <ROFlagIcon />,
  'sk-flag': <SKFlagIcon />,
  'uk-flag': <UKFlagIcon />,
} as const;
