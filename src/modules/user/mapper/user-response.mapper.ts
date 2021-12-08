import { User } from '../../../schema/user.schema';

export class UserResponseMapper {
  public mapMultipleResponse(records: User[]): UserResponse[] {
    const mapped: UserResponse[] = [];
    records.forEach((record) => {
      mapped.push(this.mapUser(record));
    });
    return mapped;
  }

  public mapSingleResponse(record: User): UserResponse {
    return this.mapUser(record);
  }

  private mapUser(record: User): UserResponse {
    return {
      id: record._id,
      name: record.name,
      email: record.email,
      meetingSettings: {
        autoJoin: 'auto',
        sendNotesTo: 'all',
        privacy: 'me',
        dispatch: 'on',
      },
    };
  }
}

export interface UserResponse {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly meetingSettings: {
    autoJoin: string;
    sendNotesTo: string;
    privacy: string;
    dispatch: string;
  };
}
