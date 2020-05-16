const sanitizeResp = (resp) => {
  const next = { ...resp };

  if (next.valid === true) {
    delete next.errors;
  }

  return next;
};

export default sanitizeResp;
