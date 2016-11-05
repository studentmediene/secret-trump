import { CollectionObject } from './collection-object.model';

export interface Player extends CollectionObject {
    hostId?: string;
    gameId: string;
    username: string;
}