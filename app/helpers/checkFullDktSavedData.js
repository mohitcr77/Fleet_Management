import services from "../services";

const d1 = new Date(0, 0, 10).getTime();
const d2 = new Date(0, 0, 0).getTime();
const today = new Date().getTime();
const diff = d1 - d2;

async function checkFullDktSavedData(token) {
  const resp = await services.getFullDKTJobs(token, 1);
  for (let i = 0; i < resp?.data?.data?.length; i++) {
    const element = resp.data.data[i];
    const diff2 = today - new Date(element.created_at) < diff;
    if (element.mail_sent === 0 && diff2) return { saved: true, doc: element };
  }
  return { saved: false };
}

export default checkFullDktSavedData;
