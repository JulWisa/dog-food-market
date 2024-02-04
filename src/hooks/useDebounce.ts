import { useEffect, useState } from 'react'

// хук useDebounce ожидает два параметра
// Обратите внимание на использование generic типа!!!
// Это нужно для корректной типизации
interface UseDebounceParams<ValueType> {
	value: ValueType
	// Задержка в миллисекундах, так как используем setTimeout
	delay: number
}
export const useDebounce = <ValueType = unknown>({
	value,
	delay,
}: UseDebounceParams<ValueType>) => {
	// Создаём локальное состояние, которое будем обновлять только
	// после того, как пройдёт указанное количество мс с последнего изменения "value"
	const [debouncedValue, setDebouncedValue] = useState(value)
	// Вся магия происходит здесь
	useEffect(() => {
		// Регистрируем setTimeout и ждём, когда его тело выполнится
		const timeoutId = setTimeout(() => {
			// Если тело setTimout выполнится, то мы обновим локальное состояние
			setDebouncedValue(value)
		}, delay)
		// А вот и главный фрагмент данного хука. Вспоминайте, когда отрабатывает функция cleanup
		// Именно в ней мы постоянно сбрасываем setTimeout и не даём ему выполниться
		return () => {
			timeoutId && clearTimeout(timeoutId)
		}
	}, [delay, value])
	// возвращаем локальное состояние
	return debouncedValue
}
