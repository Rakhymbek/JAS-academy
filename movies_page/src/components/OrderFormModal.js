import Box from "@mui/material/Box";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useMemo, useState } from "react";
import { CLOSE_MODAL } from "../store/actions/shopActions";
import { useForm, Controller } from "react-hook-form";
import { validatePhoneNumber } from "../utils/validatePhoneNumber";
import { getFieldState } from "../utils/getFieldState";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const OrderFormModal = () => {
  const open = useSelector((state) => state.shop.modalOpen);
  const dispatch = useDispatch();
  const { handleSubmit, control, reset } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      city: "",
    },
  });

  const handleClose = useCallback(() => {
    dispatch({ type: CLOSE_MODAL });
  }, [dispatch]);

  const onSubmit = useCallback(
    (values) => {
      alert("SUBMIT");
      console.log(values);
      dispatch({ type: CLOSE_MODAL });
      reset();
    },
    [dispatch, reset]
  );

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <Typography variant="h5">Оформления заявки</Typography>
        <form style={{ marginTop: "10px" }} onSubmit={handleSubmit(onSubmit)}>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <Controller
              name="name"
              control={control}
              rules={{
                validate: (value) => {
                  if (value.length < 3) return "Type more than 3 symbols";
                  return true;
                },
                required: "Поле обязательное",
              }}
              render={({ field, fieldState, formState }) => (
                <TextField
                  id="outlined-basic"
                  label="Имя"
                  {...getFieldState({ fieldState, formState })}
                  variant="outlined"
                  {...field}
                />
              )}
            />
          </FormControl>
          <FormControl fullWidth sx={{ mb: 2 }} required>
            <Controller
              name="phone"
              control={control}
              rules={{
                required: "Поле обязательное",
                validate: (value) => {
                  if (validatePhoneNumber(value)) {
                    return true;
                  } else {
                    return "Неверный номер телефона";
                  }
                },
              }}
              render={({ field, formState, fieldState }) => (
                <TextField
                  id="outlined-basic"
                  label="Номер телефона"
                  variant="outlined"
                  {...getFieldState({ fieldState, formState })}
                  {...field}
                />
              )}
            />
          </FormControl>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <Controller
              name="email"
              control={control}
              rules={{
                validate: (value) => {
                  if (
                    /^[\w\.-]+@[a-zA-Z]+?\.[a-zA-Z]{2,3}$/.test(value) ||
                    value.length === 0
                  ) {
                    return true;
                  } else {
                    return "Please type valid email";
                  }
                },
              }}
              render={({ field, fieldState, formState }) => (
                <TextField
                  id="outlined-basic"
                  label="Эл. почта"
                  variant="outlined"
                  {...field}
                  {...getFieldState({ fieldState, formState })}
                />
              )}
            />
          </FormControl>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <Controller
              name="comment"
              control={control}
              rules={{
                validate: (value) => {
                  if (value.length <= 10) return "Type more than 10 symbols";
                  return true;
                },
              }}
              render={({ field, fieldState, formState }) => (
                <TextField
                  multiline
                  rows={3}
                  id="outlined-basic"
                  label="Комментарии"
                  variant="outlined"
                  {...getFieldState({ fieldState, formState })}
                  {...field}
                />
              )}
            />
          </FormControl>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id="demo-simple-select-label">Город</InputLabel>
            <Controller
              name="city"
              control={control}
              render={({ field }) => (
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Город"
                  {...field}
                >
                  <MenuItem value={10}>Астана</MenuItem>
                  <MenuItem value={20}>Алматы</MenuItem>
                  <MenuItem value={30}>Шымкент</MenuItem>
                </Select>
              )}
            />
          </FormControl>
          <Button variant="contained" type="submit">
            Отправить
          </Button>
        </form>
      </Box>
    </Modal>
  );
};
