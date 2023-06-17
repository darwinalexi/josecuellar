segundos = int(input("ingrese los segundos"))

dias=  segundos / (24 * 60 * 60)
hora = segundos (segundos % (24 * 60 * 60)) / (60 * 60)
minutos= ((segundos  (24 * 60 * 60))  (60 * 60)) / 60
print(f"los {segundos} segundos son {dias} con {hora} horas con {minutos} minutos")

#Días: días = 
#Horas: horas = 
#Minutos: minutos = ((segundos % (24 * 60 * 60)) % (60 * 60)) / 60to