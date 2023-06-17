#se immprime
print("hola mundo soy sara")
#formas de cometar en phyton 3 """ arriba y 3 abajo o un #
"""
print("hola mundo soy DARWIN")
"""
#VARIABLES
nombre = "DARWIN"
edad = "ALEXIS"
años = "19 años"
año_de_naciomento= "año de naimiento 2003"
#formas de contanenar varriables STR es una forma de convertir los numero enteros a string oo cadenas de texto

print(f"{nombre} {edad} {años} {str(año_de_naciomento)}")
print(nombre +"-"+edad+"-"+años+"-"+str(año_de_naciomento))
#entradas 
ingrese_nombre = input("¿Cuales tu nombre?")
print(ingrese_nombre)
#condiciones
#INT se utiliza para convertir la respuesta del input en numero ty que no se genere errores
altura= int(input("¿CUAL ES TU ALTURA?"))

if  altura <= 160:
    print("eres bajo")
else: 
    print("eres alto")

    #funciones 
    def mostrar():
        nombre = "DARWIN"
        edad = "ALEXIS"
        años = "19 años"
        año_de_naciomento= "año de naimiento 2003"
        
    print(f"{nombre} {edad} {años} {str(año_de_naciomento)}")
    print(nombre +"-"+edad+"-"+años+"-"+str(año_de_naciomento))

    ingrese_nombre = input("¿Cuales tu nombre?")
    print("ingrese_nombre")

    altura= int(input("¿CUAL ES TU ALTURA?"))
#listas
personas = ["luis", "sara", "jesu"]
print(personas[2])
#bucles
for persona in personas:
    print("-"+persona)
