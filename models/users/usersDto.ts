export interface UserDto {
    id: number;
    email: string;
    name: string;
    letterForIcon: string;
}

export interface UserListDto {
    id: number;
    email: string;
    name: string;
    letterForIcon: string;
    rol: string;
    status: string;
}

export interface CreateUserDto {
    email: string;
    password: string;
    name: string;
    lastName: string;
    idRol: number;
}