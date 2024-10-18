from django.shortcuts import render

# views.py
from django.http import JsonResponse

def get_ec_info(request):
    # Implement your logic to retrieve data (replace this with your actual logic)
    ec_info = [
        {"id": 1, "name": "Anna", "roll_number": "IV EC-1", "email": "anna@gmail.com","phnumber": "09123456","first_sem_marks": "35","second_sem_marks": "30","practical_marks": "20","tutorial_marks": "10","total_marks": "95"},
        {"id": 2, "name": "John", "roll_number": "IV EC-2", "email": "john@gmail.com","phnumber": "09789123","first_sem_marks": "30","second_sem_marks": "32","practical_marks": "20","tutorial_marks": "10","total_marks": "92"},
        {"id": 3, "name": "James", "roll_number": "IV EC-3", "email": "james@gmail.com","phnumber": "09567342","first_sem_marks": "32","second_sem_marks": "28","practical_marks": "20","tutorial_marks": "10","total_marks": "90"},
        {"id": 4, "name": "Micky", "roll_number": "IV EC-4", "email": "micky@gmail.com","phnumber": "09231467","first_sem_marks": "28","second_sem_marks": "28","practical_marks": "20","tutorial_marks": "10","total_marks": "86"},
        {"id": 5, "name": "William", "roll_number": "IV EC-5", "email": "william@gmail.com","phnumber": "09125643","first_sem_marks": "28","second_sem_marks": "27","practical_marks": "20","tutorial_marks": "10","total_marks": "85"},
        # ... more data
    ]

    return JsonResponse(ec_info, safe=False)

