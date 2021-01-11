import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.locale('pt-br');
dayjs.extend(relativeTime);

export function dateFromNow(date: string){
    return dayjs(date).fromNow();
}


export function formatPrice(price: number) {
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    return formatter.format(price);
}



