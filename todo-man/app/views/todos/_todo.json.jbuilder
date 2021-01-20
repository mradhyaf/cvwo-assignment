json.extract! todo, :id, :name, :completion, :created_at, :updated_at
json.url todo_url(todo, format: :json)
