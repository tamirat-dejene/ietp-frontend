import { useState } from "react";
import { ButtonContainer, FormContainer, FormLabel, FormRow, Input, InputData, Label, StyledButton, StyledLink, Underline } from "../styles/record";
import { Form } from "react-router-dom";


const RecordPage = () => {
  const [name, setName] = useState('');
  const [licenceNumber, setLicenceNumber] = useState('');
  const [plateNumber, setPlateNumber] = useState('');
  const [speed, setSpeed] = useState('');
  const [address, setAddress] = useState('');
  const [penalityCount, setPenalityCount] = useState('');
  const [damgeCaused, setDamgeCaused] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Record saved!');
  };

  return (
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
            <Input type="text"
              value={penalityCount}
              name="penalityCount"
              id="penalityCount"
              required
              onChange={e => setPenalityCount(e.target.value)}
            />
            <Label htmlFor="penalityCount">Penality count</Label>
            <Underline />
          </InputData>
        </FormRow>
        <FormRow>
          <InputData>
            <Input type="text"
              value={damgeCaused}
              name="damgeCaused"
              id="damgeCaused"
              required
              onChange={e => setDamgeCaused(e.target.value)}
            />
            <Label htmlFor="damgeCaused">Damge caused</Label>
            <Underline />
          </InputData>
        </FormRow>

        <ButtonContainer>
          <StyledLink to="/">Cancel</StyledLink>
          <StyledButton type="submit">Save</StyledButton>
        </ButtonContainer>
      </Form>
    </FormContainer>
  )
}

export default RecordPage