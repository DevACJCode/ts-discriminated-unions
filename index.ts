enum Status {
  SUCCESS = "S",
  ERROR = "E",
}

type ResponseDataSuccess = {
  status: Status.SUCCESS;
  data: { id: number; name: string };
};

type ResponseDataError = {
  status: Status.ERROR;
  errors: { message: string }[];
};

// type ResponseData = {
//   status: Status;
//   data?: { id: number; name: string };
//   errors?: { message: string }[];
// };

type ResponseData = ResponseDataSuccess | ResponseDataError;

const retornoBackEnd: ResponseData = {
  status: Status.SUCCESS,
  data: {
    id: 1,
    name: "agnaldo",
  },
};

const consumindoFront = {} as ResponseData;
if (consumindoFront.status === Status.SUCCESS) {
  setData(consumindoFront.data);
  const id = consumindoFront.data.id;
} else {
  const mensagem = consumindoFront.errors[0].message
}

function setData(data: any) {}
