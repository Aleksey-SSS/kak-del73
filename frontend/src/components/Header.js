import React, { useState } from "react";
import "../App.css";
import { styled } from "@mui/material/styles";
// import { withStyles } from "@mui/s";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Stack from "@mui/material/Stack";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import axios from "axios";

export const AppHeader = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    data: { fio: "", age: "", mobile: "", email: "", info: "" },
  }); //для сохранение данный о пользователе
  const [hasClicked, setHasClicked] = useState(false); // для блокировки кнопки после нажатии отправки заявления

  const handleClickOpen = () => {
    setOpen(true);
    setHasClicked(false);
  };

  const handleChange = (e) => {
    console.log("asdfa", { [e.target.name]: e.target.value });
    setData((prevState) => ({
      data: {
        ...prevState.data,
        [e.target.name]: e.target.value,
      },
    }));
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    console.log("asdfa", data.data);
    const body = {
      fio: data.data.fio,
      age: data.data.age,
      mobile: data.data.mobile,
      email: data.data.email,
      info: data.data.info,
    };
    setHasClicked(true);

    await axios
      .post("http://localhost:8000/postData", body)
      .then((response) => {
        setOpen(false);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //   const BootstrapButton = styled(Button)({

  //     backgroundColor: '#0063cc',
  //     borderColor: '#0063cc',
  //     '&:hover': {
  //       backgroundColor: '#0069d9',
  //       borderColor: '#0062cc',
  //       boxShadow: 'none',
  //     },
  //     '&:active': {
  //       boxShadow: 'none',
  //       backgroundColor: '#0062cc',
  //       borderColor: '#005cbf',
  //     },
  //     '&:focus': {
  //       boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  //     },
  //   });

  // const CssTextField = withStyles({
  //     '& label': {
  //         color: 'yellow',
  //       },
  //     '& label.Mui-focused': {
  //       color: 'yellow',
  //     },
  //     '& .MuiInput-underline:after': {
  //       borderBottomColor: 'yellow',
  //     },
  //     '& .MuiOutlinedInput-root': {
  //       '& fieldset': {
  //         borderColor: 'yellow',
  //         color: 'yellow',
  //       },
  //       '&:hover fieldset': {
  //         borderColor: 'yellow',
  //       },
  //       '&.Mui-focused fieldset': {
  //         borderColor: 'yellow',
  //       },
  //     },
  //   })(TextField);

  return (
    <div className="header">
      <div className="header_main">
        <div className="header_name">
          <a href="/">Симбирские львы</a>
        </div>
        <div className="header_button_right">
          <div className="header_button">
            <div className="main_button">
              <a href="/">Главная</a>
            </div>

            <div className="contacts_button">
              <a href="/contacts">Контакты</a>
            </div>

            <div className="coaching_button">
              <a href="/coaches">Тренерский состав </a>
            </div>

            <div className="schedule_button">
              <a>Расписание</a>
            </div>

            <div className="news_button">
              <a href="/news">Новости</a>
            </div>

            <div className="reg_log">
              <Button
                variant="outlined"
                onClick={() => handleClickOpen()}
                sx={{
                  color: "yellow",
                  borderColor: "yellow",
                  "&:hover": {
                    backgroundColor: "yellow",
                    borderColor: "yellow",
                    color: "black",
                  },
                }}
              >
                Записаться
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={open} onClose={handleClose} className="form_dialog">
        <DialogTitle
          sx={{ backgroundColor: "black", color: "white", textAlign: "center" }}
        >
          Записаться на занятия
        </DialogTitle>
        <DialogContent sx={{ backgroundColor: "black" }}>
          <form onSubmit={() => handleClose()} className="form_request">
            <FormControl>
              <TextField
                type="text"
                id="FIO"
                name="fio"
                label="ФИО"
                variant="outlined"
                required
                onChange={(e) => handleChange(e)}
              />
              <TextField
                helperText="Дата рождения"
                type="date"
                id="age"
                name="age"
                variant="outlined"
                required
                onChange={(e) => handleChange(e)}
              />
              <TextField
                type="tel"
                id="mobile"
                name="mobile"
                label="Телефон"
                variant="outlined"
                required
                onChange={(e) => handleChange(e)}
              />
              <TextField
                type="email"
                id="mail"
                name="email"
                label="E-mail"
                variant="outlined"
                required
                onChange={(e) => handleChange(e)}
              />
              <TextField
                id="info"
                name="info"
                label="Краткая информация о вас"
                variant="outlined"
                multiline
                rows={4}
                placeholder="Кратко опишите себя. Расскажите нам о ваших сильных и слабых сторонах"
                onChange={(e) => handleChange(e)}
              />
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions
          sx={{
            backgroundColor: "black",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Button
            sx={{
              color: "yellow",
              backgroundColor: "black",
              borderColor: "yellow",
              "&:hover": {
                backgroundColor: "rgba(255,255,0, 0.1)",
                borderColor: "yellow",
                color: "yellow",
              },
            }}
            variant="outlined"
            onClick={handleClose}
          >
            Отмена
          </Button>
          <Button
            sx={{
              color: "black",
              backgroundColor: "yellow",
              borderColor: "yellow",
              "&:hover": {
                backgroundColor: "#CCCC00",
                borderColor: "#ffd600",
                color: "black",
              },
            }}
            variant="outlined"
            onClick={handleSubmit}
            autoFocus
            disabled={hasClicked}
          >
            Отправить заявку
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
