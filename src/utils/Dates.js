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

  return referenceDate.isBefore(currentDate.clone(), "days")
}

export const isAlmostLate = (date) => {
  let referenceDate = dayjs(date)
  let futureDate = currentDate.clone()

  return referenceDate.isBetween(futureDate, futureDate.add(2, "days"), "days", "[]")
}

export const timeToText = (date, humanized=false) => {
  let referenceDate = dayjs(date)

  if (humanized) {
    if (referenceDate.isToday()) return "Today"
    if (referenceDate.isYesterday()) return "Yesterday"
    if (referenceDate.isTomorrow()) return "Tomorrow" 
  }

  return referenceDate.locale("en").format("D MMM, YYYY")
}