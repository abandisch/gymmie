export const requiredEmail = value => (value ? undefined : 'Your email address is required');
export const requiredWeight = value => (value ? undefined : 'Weight is required');
export const requiredReps = value => (value ? undefined : 'Number of reps is required');
export const required = value => (value ? undefined : 'Field is required');
export const nonEmpty = value => (value.trim() !== '' ? undefined : 'Field cannot be empty');
export const email = value => (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? undefined : 'A valid email address is required');
