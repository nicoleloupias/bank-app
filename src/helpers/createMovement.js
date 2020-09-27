export const createMovement = (
  sender,
  receiver,
  quantity,
  action,
) => ({
  sender,
  receiver,
  quantity,
  action,
  date: Date.now(),
});
