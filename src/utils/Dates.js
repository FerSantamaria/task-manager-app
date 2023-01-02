import dayjs from "dayjs"
import isBetween from "dayjs/plugin/isBetween"
import isToday from "dayjs/plugin/isToday"
import isTomorrow from "dayjs/plugin/isTomorrow"
import isYesterday from "dayjs/plugin/isYesterday"
import 'dayjs/locale/en'

dayjs.extend(isBetween)
dayjs.extend(isToday)
dayjs.extend(isTomorrow)
dayjs.extend(isYesterday)

const currentDate = dayjs()

export const isOnTime = (date) => {
  let referenceDate = dayjs(date)
  
  return referenceDate.isAfter(currentDate.clone().add(2, "days"))
}

export const isLate = (date) => {
  let referenceDate = dayjs(date)

  return referenceDate.isBefore(currentDate.clone())
}

export const isAlmostLate = (date) => {
  let referenceDate = dayjs(date)

  return referenceDate.isBetween(currentDate.clone(), currentDate.clone().add(2, "days"))
}

export const timeToText = (date) => {
  let referenceDate = dayjs(date)

  if (referenceDate.isToday()) return "Today" 
  if (referenceDate.isYesterday()) return "Yesterday" 
  if (referenceDate.isTomorrow()) return "Tomorrow" 

  return referenceDate.locale("en").format("D MMM, YYYY")
}