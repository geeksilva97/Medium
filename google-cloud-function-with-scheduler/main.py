import base64, json
from scripts.mailer import send_mail

def drink_water_now(event, context):
  """
  This function remeMber a user to drink water periodically
  """

  # The data comes to the google cloud pub / sub function as a BASE64. Uncomment the following lines to use it
  # data = json.loads(base64.b64decode(event['data']).decode('utf-8'))
  # print(data)

  send_mail(
    email_from='email_from@gmail.com',
    to='email_to@gmail.com', 
    subject='Keep Hydrated: Drink water now!',
    body_message='Hey, remember to drink water. It is very important for your health!!',
    from_name='Edigleysson Silva'
  )
