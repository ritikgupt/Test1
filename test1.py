def add_screen(screen,l):
    q={screen:l}
    print(q)
n=int(input())
for i in range(n):
    a=[i for i in input().split()]
    action=a[0]
    screen=a[1]
    l=a[2:]
    print(action)
    print(screen)
    print(l)
    if action=='add-screen':
        add_screen(screen,l)



    
