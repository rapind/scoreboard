# A sample Guardfile
# More info at https://github.com/guard/guard#readme

guard 'sprockets', 
      destination: 'public/assets', 
      root_file: ['scoreboard.js', 'scoreboard.css'],
      asset_paths: %w(assets/images assets/javascripts assets/stylesheets vendor/images vendor/javascripts vendor/stylesheets) do
  watch (%r{(assets|vendor)\/javascripts\/.*})
  watch (%r{(assets|vendor)\/stylesheets\/.*})
  watch (%r{(assets|vendor)\/images\/.*})
end

guard 'livereload' do
  # App
  watch(%r{server.rb})

  # Static files
  watch(%r{public\/.*})
end



