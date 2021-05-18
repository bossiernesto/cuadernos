## Interconectando nodos con `.connect` en Elixir

Inicializamos dos nodos primero

```
iex --name nodo1@127.0.0.1 --cookie secret
```

```
iex --name nodo2@127.0.0.1 --cookie secret
```

La manera manual de conextar los nodos es mediante `Node.connect`

```
iex(nodo2@127.0.0.1)1> Node.connect :"nodo1@127.0.0.1"
true
```

Despues tenemos una manera de saber a que nodos estamos conectados desde un nodo

```
iex(nodo1@127.0.0.1)1> Node.list
[:"nodo2@127.0.0.1"]
```

```
iex(nodo2@127.0.0.1)2> Node.list
[:"nodo1@127.0.0.1"]
```

### Como inicializamos un proceso desde otro nodo??

```elixir
saludar = fn() -> IO.puts("Hola desde #{inspect(Node.self)}") end
Node.spawn(:"nodo2@127.0.0.1", saludar)
````

```elixir
iex(nodo1@127.0.0.1)2> saludar = fn() -> IO.puts("Hola desde #{inspect(Node.self)}") end
#Function<45.97283095/0 in :erl_eval.expr/5>
iex(nodo1@127.0.0.1)3> Node.spawn(:"nodo2@127.0.0.1", saludar)
#PID<10992.122.0>
```