export interface NavData {
    id: number;
    label: string;
    routes?: Array<string>;
    icon?: string;
    selected?: boolean;
}

export const navData: Array<NavData> = [
    {
        id: 1,
        label: 'Dashboard',
        routes: ['dashboard', '']
    },
    {
        id: 2,
        label: 'FizzBuzz',
        routes: ['fizzbuzz', 'fizz-buzz']
    },
    {
        id: 3,
        label: 'Factorial',
        routes: ['factorial']
    },
    {
        id: 4,
        label: 'Notification',
        icon: 'ic_notifications.png'
    },
    {
        id: 5,
        label: 'Profile',
        icon: 'ic_person.png'
    }
];