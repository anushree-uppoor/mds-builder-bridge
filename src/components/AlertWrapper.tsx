// src/components/AlertWrapper.tsx

import React from 'react'
import {
  Alert,
  SUCCESS_ALERT_GLOBAL,
  WARNING_ALERT_GLOBAL,
  DANGER_ALERT_GLOBAL,
  INFORMATION_ALERT_GLOBAL,
  NEUTRAL_ALERT_GLOBAL,
  getAlertUniqueId,
} from '@mds/mds-reactjs-library'

// Type definitions
export type AlertType = 
  | 'success' 
  | 'warning' 
  | 'danger' 
  | 'information' 
  | 'neutral'

export interface AlertWrapperProps {
  type: AlertType
  message: string
  style?: React.CSSProperties
}

// Maps plain strings to MDS constants
const typeMap = {
  success:     SUCCESS_ALERT_GLOBAL,
  warning:     WARNING_ALERT_GLOBAL,
  danger:      DANGER_ALERT_GLOBAL,
  information: INFORMATION_ALERT_GLOBAL,
  neutral:     NEUTRAL_ALERT_GLOBAL,
}

export const AlertWrapper: React.FC<AlertWrapperProps> = ({
  type,
  message,
  style,
}) => (
  <Alert
    id={getAlertUniqueId()}
    type={typeMap[type]}
    style={style}
  >
    {message}
  </Alert>
)
