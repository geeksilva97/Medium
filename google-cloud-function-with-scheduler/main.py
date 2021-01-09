import base64, json
from scripts.mailer import send_mail

def drink_water_now(event, context):
  """
  This function remeMber a user to drink water periodically
  """

  # data incomes in google cloud pub/sub funuction as a BASE64. UNCOMMENT the lines below to use it
  # data = json.loads(base64.b64decode(event['data']).decode('utf-8'))
  # print(data)

  send_mail('edigleyssonsilva@gmail.com', 'edigleyssonsilva@gmail.com', 'Keep Hydrated: Drink water now!', 'Hey, remember to drink water. It is very important for your health!!' , 'Edigleysson Silva')  


