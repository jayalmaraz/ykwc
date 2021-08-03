// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const allowedCodes = [];

export default (req, res) => {
  if (req.method === "POST") {
    const { code } = req.body;

    try {
      if (!allowedCodes.includes(code)) {
        setTimeout(() => {
          return res.status(500).end();
        }, 1500);
        return;
      }

      return res.status(200).end();
    } catch (err) {
      console.log(err);
      res.status(500).end();
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};
