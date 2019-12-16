import { adminTableState, AdminTableState } from './AdminTable/adminTable';

export interface AppState {
    adminTableState: AdminTableState;
}

export const reducers = {
    adminTableState,
};
