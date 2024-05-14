"use client"
export const FETCH_EMAILS_SUCCESS = 'FETCH_EMAILS_SUCCESS';
export const OPEN_EMAIL = 'OPEN_EMAIL';

interface FetchEmailsSuccessAction {
  type: typeof FETCH_EMAILS_SUCCESS;
  payload: Email[];
}

interface OpenEmailAction {
  type: typeof OPEN_EMAIL;
  payload: number; 
}

export type EmailActionTypes = FetchEmailsSuccessAction | OpenEmailAction;

export interface Email {
  subject: string;
  to: string;
  body: string;
  time: string;
}

export const fetchEmailsSuccess = (emails: Email[]) => ({
  type: FETCH_EMAILS_SUCCESS,
  payload: emails,
});

export const openEmail = (index: number | null) => ({
  type: OPEN_EMAIL,
  payload: index,
});
