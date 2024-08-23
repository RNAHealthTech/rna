import React from 'react';
import { Avatar, AvatarGroup, Tooltip } from '@mui/material';

export interface User {
    id: number;
    name: string;
    avatar: string;
}

interface AvatarExampleProps {
    users: User[];
    max?: number;
}


const AvatarExample: React.FC<AvatarExampleProps> = ({ users, max }) => {
    return (
        <div className="flex items-center justify-center p-4">
            <AvatarGroup max={max} className="custom-avatar-group">
                {users.map((user) => (
                    <Tooltip key={user.id} title={user.name} arrow>
                        <Avatar alt={user.name} src={user.avatar} className="w-12 h-12" />
                    </Tooltip>
                ))}
            </AvatarGroup>
        </div>
    );
};

export default AvatarExample;