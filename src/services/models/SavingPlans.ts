/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Card } from './Card';
import type { SavingPlanType } from './SavingPlanType';
import type { Status } from './Status';
import type { User } from './User';

export type SavingPlans = {
    id?: number;
    dateCreated?: string;
    dateModified?: string;
    name?: string | null;
    description?: string | null;
    savingPlanTypeId?: number;
    savingPlanType?: SavingPlanType;
    durationInDays?: number;
    amount?: number;
    interestRate?: number;
    monthlyPayment?: number | null;
    maturityDate?: string;
    paymentMethod?: string | null;
    targetAmount?: number | null;
    targetDate?: number | null;
    debitFrequencyInDays?: number;
    preferredRecurringPaymentDate?: string;
    startDate?: string;
    userId?: number;
    user?: User;
    statusId?: number;
    status?: Status;
    cardId?: number;
    card?: Card;
};

