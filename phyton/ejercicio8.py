dias = int(input("ingrese el numero de dias"))
horas = int(input("ingrese el numero de horas"))
minuto= int(input("ingrese el numero de minutos"))

if dias > 7 :
    print("ese numero de dias no existen")
if horas > 24:
    print("ese numero de horas no existen")
if  minuto > 60:
    print("ese numero de minutos no existen")
    
else:
     #minutos * 60
    dia = minuto * 60
    #Segundos en horas: segundos = horas * 60 * 60
    segundo_horas= 60 * dia
    #Segundos en días: segundos = días * 24 * 60 * 60
    segundos_dias = dias * 24 * 60 * 60

    print(f"los {dias} dias tienen{dia} minutos y estos tienen {segundos_dias} segundos")
    
    
   