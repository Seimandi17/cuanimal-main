
export default function FormValues(event, config = {
  resetValues: true
}) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const values = Object.fromEntries(formData.entries());
  if(config.resetValues) {
    event.target.reset();
  }
  return values;
}