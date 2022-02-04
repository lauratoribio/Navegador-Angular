export interface UserInterface {
    id: number,
    first_name: String,
    last_name: String,
    email: string,
    avatar: string
}

export interface UserAPIResponseInterface {
    data: UserAPIInterface[]
}

export interface UserAPIInterface {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string
}