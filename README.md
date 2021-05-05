# Frontend Application Logic

Everything happens within App.tsx which comprises of three conditionally rendered views.
The view to be rendered is stored in the application state with current view set to an integer of 1 which renders the input field for OTP request.

When the user enters a phone number and hits the Request OTP button, a POST request is being sent to the backend to generate an OTP which is being sent back to the user. Once this is successful, The view state will be updated to 2 and the verify OTP view will be rendered.

When the user enters the OTP and hits the verify OTP button, a POST request is being sent to verify the OTP. Once this is successful, The view state updates again and the success view ias being rendered

