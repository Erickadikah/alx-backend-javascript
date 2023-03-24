export default function quadrial(mathFunction) {
  const queue = [];
  try {
    queue.push(mathFunction());// appending the error to the queue
  } catch (error) {
    queue.push(String(error));
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
