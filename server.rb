Bundler.require

get "/" do
  send_file File.join(settings.public_folder, 'index.html')
end

get "/scores.json" do
  cache_control :public, :must_revalidate, :max_age => 0
  send_file 'scores.json'
end  