import moment from 'moment'

const formatDate = (date: string | any): any => moment(date).format('DD/MM/YYYY')

const formatDateReverse = (date: string | any): any => moment(date).format('YYYY-DD-MM')

export { formatDate, formatDateReverse }
