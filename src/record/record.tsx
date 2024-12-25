import { useState } from "react";
import { ButtonContainer, FormContainer, FormLabel, FormRow, Input, InputData, Label, StyledButton, StyledLink, Underline } from "../ui/form_components";
import { Form, useNavigate, useOutletContext } from "react-router-dom";
import { TableDataModel } from "../lib/defn";
import { Snackbar, Alert } from '@mui/material'


const RecordPage = () => {
  const [name, setName] = useState('');
  const [licenceNumber, setLicenceNumber] = useState('');
  const [plateNumber, setPlateNumber] = useState('');
  const [speed, setSpeed] = useState('');
  const [address, setAddress] = useState('');
  const [date, setDate] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [severity, setSeverity] = useState<'success' | 'error' | 'info' | 'warning'>('success');
  const [processing, setIsProcessing] = useState(false);
  const navigate = useNavigate();
  const { loggedIn } = useOutletContext<{ loggedIn: boolean }>()
  
  const buildSnackbar = (message: string, severity: 'success' | 'error' | 'info' | 'warning') => {
    setSnackbarMessage(message);
    setSeverity(severity);
    setSnackbarOpen(true);
  };


  const handleSubmit = (e: { preventDefault: () => void; }) => {
    setIsProcessing(true);
    e.preventDefault();

    const record: TableDataModel = {
      driver_name: name,
      driver_licence: licenceNumber,
      car_plate: plateNumber,
      speed: speed,
      report_date: date,
      city: address,
    };
    console.log('Record:', record);
    fetch(`${process.env.API_URL}/reports`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(record),
    }).then(async (response) => {
      console.log('Response:', response.status);
      const result = await response.json();
      console.log('Result:', result);

      if (response.status === 200) {
        buildSnackbar('Record saved successfully', 'success');
      } else {
        buildSnackbar('An error occurred', 'error');
      }
      setIsProcessing(false);

      setTimeout(() => {
        setSnackbarOpen(false);
        navigate('/dashboard', { replace: true });
      }, 2000);
    });
  };


  if (!loggedIn) {
    return null
  }
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        backgroundColor: 'inherit'}}>
      <FormContainer>
        <FormLabel>Record Page</FormLabel>
        <Form onSubmit={handleSubmit}>
          <FormRow>
            <InputData>
              <Input type="text"
                value={name}
                name="title"
                id="name"
                required
                onChange={e => setName(e.target.value)}
              />
              <Label htmlFor="name">Drive name</Label>
              <Underline />
            </InputData>
          </FormRow>
          <FormRow>
            <InputData>
              <Input type="text"
                value={licenceNumber}
                name="licenceNumber"
                id="licenceNumber"
                required
                onChange={e => setLicenceNumber(e.target.value)}
              />
              <Label htmlFor="licenceNumber">Licence number</Label>
              <Underline />
            </InputData>
          </FormRow>
          <FormRow>
            <InputData>
              <Input type="text"
                value={plateNumber}
                name="plateNumber"
                id="plateNumber"
                required
                onChange={e => setPlateNumber(e.target.value)}
              />
              <Label htmlFor="plateNumber">Plate number</Label>
              <Underline />
            </InputData>
          </FormRow>
          <FormRow>
            <InputData>
              <Input type="text"
                value={speed}
                name="speed"
                id="speed"
                required
                onChange={e => setSpeed(e.target.value)}
              />
              <Label htmlFor="speed">Speed</Label>
              <Underline />
            </InputData>
          </FormRow>
          <FormRow>
            <InputData>
              <Input type="text"
                value={address}
                name="address"
                id="address"
                required
                onChange={e => setAddress(e.target.value)}
              />
              <Label htmlFor="address">Address</Label>
              <Underline />
            </InputData>
          </FormRow>
          <FormRow>
            <InputData>
              {/* Date */}
              <Input type="date"
                value={date}
                name="date"
                id="date"
                required
                onChange={e => setDate(e.target.value)} />
              <Label htmlFor="date">Date</Label>
              <Underline />
            </InputData>
          </FormRow>

          <ButtonContainer>
            <StyledLink to="/">Cancel</StyledLink>
            <StyledButton type="submit" disabled={processing}>Save</StyledButton>
          </ButtonContainer>
        </Form>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={2000}
          onClose={() => setSnackbarOpen(false)}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <Alert
            onClose={() => setSnackbarOpen(false)}
            severity={severity}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </FormContainer>
    </div>
  )
}

export default RecordPage